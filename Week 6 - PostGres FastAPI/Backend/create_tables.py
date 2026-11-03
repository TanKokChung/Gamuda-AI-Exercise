
from database import engine, Base
from models import UserDetails

# Create all tables defined in the imported models
Base.metadata.create_all(bind=engine)

print("UserDetails table created successfully!")
