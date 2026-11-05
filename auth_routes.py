from flask import Blueprint
from app.controllers.auth_controller import *

auth_bp = Blueprint("auth", __name__)

auth_bp.route("/login", methods=["POST"])(login)
auth_bp.route("/register", methods=["POST"])(register)