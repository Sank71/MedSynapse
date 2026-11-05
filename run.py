
from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

# ======================================
# FLASK APP
# ======================================

app = Flask(__name__)

CORS(app)

# ======================================
# MYSQL CONNECTION
# ======================================

try:

    db = mysql.connector.connect(

        host="localhost",
        user="root",
        password="sanketh@2006",
        database="MEDSYNAPSE"

    )

    cursor = db.cursor(dictionary=True)

    print("MySQL Connected Successfully")

except Exception as e:

    print("Database Error:", e)

# ======================================
# HOME ROUTE
# ======================================

@app.route('/')
def home():

    return jsonify({

        "message": "MedSynapse Backend Running"

    })

# ======================================
# LOGIN API
# ======================================

@app.route('/login', methods=['POST'])
def login():

    try:

        data = request.json

        email = data['email']
        password = data['password']

        # INSERT INTO DATABASE

        query = """
        INSERT INTO users (email, password)
        VALUES (%s, %s)
        """

        values = (email, password)

        cursor.execute(query, values)

        db.commit()

        return jsonify({

            "success": True,
            "message": "Login Saved Successfully"

        })

    except Exception as e:

        return jsonify({

            "success": False,
            "error": str(e)

        })

# ======================================
# ADD PATIENT API
# ======================================

@app.route('/add_patient', methods=['POST'])
def add_patient():

    try:

        data = request.json

        name = data['name']
        age = data['age']
        bp = data['bp']
        sugar = data['sugar']
        oxygen = data['oxygen']
        heart = data['heart']

        query = """
        INSERT INTO patients
        (name, age, bp, sugar, oxygen, heart_rate)
        VALUES (%s, %s, %s, %s, %s, %s)
        """

        values = (

            name,
            age,
            bp,
            sugar,
            oxygen,
            heart

        )

        cursor.execute(query, values)

        db.commit()

        return jsonify({

            "success": True,
            "message": "Patient Added Successfully"

        })

    except Exception as e:

        return jsonify({

            "success": False,
            "error": str(e)

        })

# ======================================
# GET PATIENTS API
# ======================================

@app.route('/patients', methods=['GET'])
def get_patients():

    try:

        cursor.execute("SELECT * FROM patients")

        patients = cursor.fetchall()

        return jsonify(patients)

    except Exception as e:

        return jsonify({

            "success": False,
            "error": str(e)

        })

# ======================================
# RUN SERVER
# ======================================

if __name__ == '__main__':

    app.run(debug=True)