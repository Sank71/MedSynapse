from flask import Blueprint
from app.controllers.consult_controller import *

consult_bp = Blueprint("consult", __name__)

consult_bp.route("/doctors", methods=["GET"])(get_doctors)