import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import FewShotPromptTemplate, PromptTemplate
from langchain_core.output_parsers import StrOutputParser

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
llm = ChatGoogleGenerativeAI(model="gemini-3.5-flash-lite", api_key=GEMINI_API_KEY)

examples = [
    {"review": "The teaching staff are very friendly and spoke gently toward the childrens, I feel safe leaving my kids with this Taska!", "sentiment": "Positive"},
    {"review": "My kids come back home with a bruise on his cheeks! When asked, the caretaker give response like its not her problem. Horrible!", "sentiment": "Negative"},
    {"review": "This taska is close to my house. Nothing special about it.", "sentiment": "Neutral"},
]

example_prompt = PromptTemplate(
    input_variables=["review", "sentiment"],
    template="Taska Review: {review}\nSentiment: {sentiment}"
)

prompt = FewShotPromptTemplate(
    examples=examples,
    example_prompt=example_prompt,
    prefix="Analyze the Taska review sentiment.\nRespond with ONLY ONE WORD: Positive, Negative, Mixed, or Neutral.\n",
    suffix="Taska Review: {input}\nSentiment:",
    input_variables=["input"]
)

chain = prompt | llm | StrOutputParser()

print("Taska Review Sentiment Analyzer (type 'quit' to exit)")
while True:
    review = input("Enter Taska review: ").strip()
    if not review:
        continue
    if review.lower() == 'quit':
        break
    try:
        response = chain.invoke({"input": review})
        print(response.strip())
    except Exception as e:
        print(f"Error: {e}")

print("\nProgram ended.")