import os
import certifi
from dotenv import load_dotenv
from pymongo import MongoClient
from langchain_mongodb import MongoDBAtlasVectorSearch
from langchain_core.prompts import ChatPromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from embeddings import embeddings

load_dotenv()
MONGODB_URI=os.getenv("MONGODB_ATLAS_CLUSTER_URI")
GEMINI_API_KEY=os.getenv("GEMINI_API_KEY")

client = MongoClient(MONGODB_URI, tlsCAFile=certifi.where())

llm = ChatGoogleGenerativeAI(model="gemini-3.6-flash", api_key=GEMINI_API_KEY)

DB_NAME="test_db"
COLLECTION_NAME="test_collection_pdf"
ATLAS_VECTOR_SEARCH_INDEX_NAME="test-index-pdf"
MONGODB_COLLECTION=client[DB_NAME][COLLECTION_NAME]

vector_store=MongoDBAtlasVectorSearch(
    collection=MONGODB_COLLECTION,
    embedding=embeddings,
    index_name=ATLAS_VECTOR_SEARCH_INDEX_NAME,
    relevance_score_fn="cosine",
)
retriever = vector_store.as_retriever(search_kwargs={"k": 10})

system_prompt=(
    """
    You are a helpful assistant and psychotic that answers questions based on the context provided. If the context is not relevant to the question, you will answer that you don't know.
    CONTEXT:\n{context}
    """
)

prompt = ChatPromptTemplate .from_messages([
    ("system", system_prompt),
    ("human","{input}"),
])

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)


rag_chain = (
    {"context": retriever | format_docs, "input": RunnablePassthrough()}
    | prompt | llm | StrOutputParser()
)

print("Querying Vector DB...")
response = rag_chain.invoke("What are the main causes of diabetes?")
print(f"\nAI Response:{response}")
client.close()