import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

load_dotenv()
llm = ChatGoogleGenerativeAI(
    model="gemini-3.5-flash-lite",
    api_key=os.getenv("GEMINI_API_KEY")
)

youtube_url = "https://www.youtube.com/watch?v=y4rE0yMFRN8&list=WL&index=1"


prompt = ChatPromptTemplate.from_messages([
    ("system", "You are an export video analyst. Generate a paragraph that summarizes this video, with corresponding timecodes."),
    ("human", [
        {
            "type": "text",
            "text": "{analysis_request}"
        },
        {
            "type": "image",
            "image_url": {"url": "{video_url}"}
        }
    ])
])

chain = prompt | llm | StrOutputParser()
print("Analyzing video...")

response = chain.invoke({
    "analysis_request": "Describe what's happening in this video.",
    "video_url": youtube_url 
})

print("Analysis completed")
print("\nResults:\n" + "-" * 40)
print(response)