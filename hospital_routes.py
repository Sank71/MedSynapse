from flask import Blueprint
from app.controllers.hospital_controller import *

hospital_bp = Blueprint("hospital", __name__)

hospital_bp.route("/", methods=["GET"])(get_hospitals)