from database import Base
from sqlalchemy import Column, Integer, String

class UserDetails(Base):
    __tablename__ = "UserDetails"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, nullable=False, index=True)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    contact_no = Column(String(20))
    userType = Column(String(50), nullable=False)