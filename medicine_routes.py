from flask import Blueprint
from app.controllers.medicine_controller import *

medicine_bp = Blueprint("medicine", __name__)

medicine_bp.route("/<int:hospital_id>", methods=["GET"])(get_medicines)