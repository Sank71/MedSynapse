from flask import Blueprint
from app.controllers.blood_controller import *

blood_bp = Blueprint("blood", __name__)

blood_bp.route("/<int:hospital_id>", methods=["GET"])(get_blood_stock)