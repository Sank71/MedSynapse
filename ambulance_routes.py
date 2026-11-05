from flask import Blueprint
from app.controllers.ambulance_controller import *

ambulance_bp = Blueprint("ambulance", __name__)

ambulance_bp.route("/<int:hospital_id>", methods=["GET"])(get_ambulances)