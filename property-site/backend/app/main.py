from fastapi import FastAPI
from pydantic import BaseModel


class Enquiry(BaseModel):
    name: str
    email: str
    phone: str | None = None
    location: str | None = None
    message: str | None = None


app = FastAPI(
    title="Aggent Property API",
    description="API powering the Aggent property discovery experience.",
    version="0.1.0",
)


@app.get("/health", tags=["Operations"])
def health_check():
    return {"status": "ok"}


@app.post("/enquiries", tags=["Leads"])
def capture_enquiry(payload: Enquiry):
    """
    Capture buyer requirements from the web experience.
    In production this would hand off to a CRM or queue for follow-up.
    """
    # Placeholder for downstream integration.
    return {"received": True, "enquiry": payload}

