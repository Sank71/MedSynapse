from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
jwt = JWTManager()


def create_app():
    app = Flask(__name__)

    from config.config import Config
    app.config.from_object(Config)

    db.init_app(app)
    jwt.init_app(app)
    CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

    # Register blueprints
    from app.routes.auth_routes      import auth_bp
    from app.routes.hospital_routes  import hospital_bp
    from app.routes.blood_routes     import blood_bp
    from app.routes.ambulance_routes import ambulance_bp
    from app.routes.medicine_routes  import medicine_bp
    from app.routes.consult_routes   import consult_bp
    from app.routes.analytics_routes import analytics_bp
    from app.routes.sos_routes       import sos_bp

    app.register_blueprint(auth_bp,      url_prefix="/api/auth")
    app.register_blueprint(hospital_bp,  url_prefix="/api/hospitals")
    app.register_blueprint(blood_bp,     url_prefix="/api/bloodbank")
    app.register_blueprint(ambulance_bp, url_prefix="/api/ambulance")
    app.register_blueprint(medicine_bp,  url_prefix="/api/medicines")
    app.register_blueprint(consult_bp,   url_prefix="/api/consultations")
    app.register_blueprint(analytics_bp, url_prefix="/api/analytics")
    app.register_blueprint(sos_bp,       url_prefix="/api/sos")

    with app.app_context():
        db.create_all()

    return app
