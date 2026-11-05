DROP DATABASE MEDSYNAPSE;
CREATE DATABASE MedSynapse;
USE MedSynapse;
USE MEDSYNAPSE;

CREATE TABLE patients (

    id INT PRIMARY KEY AUTO_INCREMENT,

    name VARCHAR(100),

    age INT,

    bp INT,

    sugar INT,

    oxygen INT,

    heart_rate INT

);
CREATE TABLE Hospital (
    hospital_id INT PRIMARY KEY AUTO_INCREMENT,
    hospital_name VARCHAR(100) NOT NULL,
    hospital_type VARCHAR(50),
    address VARCHAR(255),
    city VARCHAR(50),
    state VARCHAR(50),
    pincode VARCHAR(10),
    phone VARCHAR(15) UNIQUE,
    email VARCHAR(100) UNIQUE,
    total_beds INT,
    departments VARCHAR(255),
    rating DECIMAL(2,1)
);

CREATE TABLE Doctor (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    hospital_id INT,
    doctor_name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100),
    qualification VARCHAR(100),
    experience INT,
    phone VARCHAR(15) UNIQUE,
    email VARCHAR(100) UNIQUE,
    consultation_fee DECIMAL(10,2),
    availability VARCHAR(100),

    FOREIGN KEY (hospital_id)
    REFERENCES Hospital(hospital_id)
);

CREATE TABLE Patient (
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    hospital_id INT,
    patient_name VARCHAR(100) NOT NULL,
    age INT,
    gender VARCHAR(10),
    dob DATE,
    blood_group VARCHAR(10),
    phone VARCHAR(15) UNIQUE,
    address VARCHAR(255),
    emergency_contact VARCHAR(15),

    FOREIGN KEY (hospital_id)
    REFERENCES Hospital(hospital_id)
);

CREATE TABLE Appointment (
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    doctor_id INT,
    appointment_date DATE,
    appointment_time TIME,
    purpose VARCHAR(255),
    status VARCHAR(50),

    FOREIGN KEY (patient_id)
    REFERENCES Patient(patient_id),

    FOREIGN KEY (doctor_id)
    REFERENCES Doctor(doctor_id)
);
CREATE DATABASE IF NOT EXISTS MEDSYNAPSE;

USE MEDSYNAPSE;

CREATE TABLE IF NOT EXISTS users (

    id INT PRIMARY KEY AUTO_INCREMENT,

    email VARCHAR(100),

    password VARCHAR(100)

);
CREATE TABLE Treatment (
    treatment_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    doctor_id INT,
    appointment_id INT,
    diagnosis VARCHAR(255),
    treatment_plan TEXT,
    start_date DATE,
    end_date DATE,

    FOREIGN KEY (patient_id)
    REFERENCES Patient(patient_id),

    FOREIGN KEY (doctor_id)
    REFERENCES Doctor(doctor_id),

    FOREIGN KEY (appointment_id)
    REFERENCES Appointment(appointment_id)
);

CREATE TABLE Prescription (
    prescription_id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_id INT,
    patient_id INT,
    medicine_name VARCHAR(100),
    dosage VARCHAR(50),
    frequency VARCHAR(50),
    duration VARCHAR(50),
    instructions TEXT,
    prescribed_date DATE,

    FOREIGN KEY (doctor_id)
    REFERENCES Doctor(doctor_id),

    FOREIGN KEY (patient_id)
    REFERENCES Patient(patient_id)
);

CREATE TABLE RecordTable (
    record_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    bp VARCHAR(20),
    sugar_level VARCHAR(20),
    oxygen_level VARCHAR(20),
    notes TEXT,
    report_date DATE,

    FOREIGN KEY (patient_id)
    REFERENCES Patient(patient_id)
);

CREATE TABLE Billing (
    bill_id INT PRIMARY KEY AUTO_INCREMENT,
    treatment_id INT,
    total_amount DECIMAL(10,2),
    payment_status VARCHAR(50),
    payment_method VARCHAR(50),
    bill_date DATE,

    FOREIGN KEY (treatment_id)
    REFERENCES Treatment(treatment_id)
);

INSERT INTO Hospital
(hospital_name, hospital_type, address, city, state,
pincode, phone, email, total_beds, departments, rating)

VALUES
('Apollo Hospital', 'Multi-Speciality',
'MG Road', 'Bangalore', 'Karnataka',
'560001', '9876543210', 'apollo@gmail.com',
500, 'Cardiology, Neurology', 4.8),

('City Care Hospital', 'General',
'BTM Layout', 'Bangalore', 'Karnataka',
'560076', '9876501234', 'citycare@gmail.com',
300, 'Orthopedics, ENT', 4.5);

INSERT INTO Doctor
(hospital_id, doctor_name, specialization,
qualification, experience, phone, email,
consultation_fee, availability)

VALUES
(1, 'Dr. Rajesh Kumar', 'Cardiologist',
'MBBS, MD', 10, '9000000001',
'rajesh@gmail.com', 800, 'Mon-Fri'),

(1, 'Dr. Priya Sharma', 'Neurologist',
'MBBS, DM', 8, '9000000002',
'priya@gmail.com', 1000, 'Tue-Sat'),

(2, 'Dr. Arjun Rao', 'Orthopedic',
'MBBS, MS', 6, '9000000003',
'arjun@gmail.com', 700, 'Mon-Sat');

INSERT INTO Patient
(hospital_id, patient_name, age, gender,
dob, blood_group, phone, address,
emergency_contact)

VALUES
(1, 'Rahul Mehta', 25, 'Male',
'1999-05-12', 'O+', '9011111111',
'Indiranagar', '9988776655'),

(1, 'Sneha Reddy', 30, 'Female',
'1994-08-20', 'A+', '9022222222',
'Whitefield', '9977665544'),

(2, 'Karan Singh', 40, 'Male',
'1984-03-15', 'B+', '9033333333',
'Jayanagar', '9966554433');

INSERT INTO Appointment
(patient_id, doctor_id,
appointment_date, appointment_time,
purpose, status)

VALUES
(1, 1, '2026-05-10',
'10:00:00', 'Heart Checkup', 'Completed'),

(2, 2, '2026-05-11',
'11:30:00', 'Migraine Consultation', 'Scheduled'),

(3, 3, '2026-05-12',
'09:00:00', 'Knee Pain', 'Completed');

INSERT INTO Treatment
(patient_id, doctor_id, appointment_id,
diagnosis, treatment_plan,
start_date, end_date)

VALUES
(1, 1, 1,
'High Blood Pressure',
'Medication and Diet Plan',
'2026-05-10', '2026-06-10'),

(2, 2, 2,
'Migraine',
'Neurological Therapy',
'2026-05-11', '2026-06-15'),

(3, 3, 3,
'Joint Pain',
'Physiotherapy',
'2026-05-12', '2026-07-01');

INSERT INTO Prescription
(doctor_id, patient_id,
medicine_name, dosage,
frequency, duration,
instructions, prescribed_date)

VALUES
(1, 1,
'Amlodipine', '5mg',
'Twice a day', '30 days',
'Take after food', '2026-05-10'),

(2, 2,
'Sumatriptan', '50mg',
'Once a day', '15 days',
'Take during headache', '2026-05-11'),

(3, 3,
'Pain Relief Gel', 'Apply',
'Twice a day', '20 days',
'Massage gently', '2026-05-12');

INSERT INTO RecordTable
(patient_id, bp, sugar_level,
oxygen_level, notes, report_date)

VALUES
(1, '140/90', '110',
'98%', 'BP slightly high',
'2026-05-10'),

(2, '120/80', '95',
'99%', 'Stable condition',
'2026-05-11'),

(3, '130/85', '105',
'97%', 'Joint swelling observed',
'2026-05-12');

INSERT INTO Billing
(treatment_id, total_amount,
payment_status, payment_method,
bill_date)

VALUES
(1, 5000,
'Paid', 'UPI',
'2026-05-10'),

(2, 7000,
'Pending', 'Card',
'2026-05-11'),

(3, 4500,
'Paid', 'Cash',
'2026-05-12');

CREATE VIEW PatientAppointments AS
SELECT
    p.patient_name,
    d.doctor_name,
    a.appointment_date,
    a.appointment_time,
    a.status

FROM Appointment a
JOIN Patient p
ON a.patient_id = p.patient_id

JOIN Doctor d
ON a.doctor_id = d.doctor_id;

DELIMITER //

CREATE PROCEDURE GetPatientDetails(IN pid INT)

BEGIN

    SELECT *
    FROM Patient
    WHERE patient_id = pid;

END //

DELIMITER ;

DELIMITER //

CREATE FUNCTION TotalDoctors(hid INT)

RETURNS INT

DETERMINISTIC

BEGIN

    DECLARE total INT;

    SELECT COUNT(*)
    INTO total
    FROM Doctor
    WHERE hospital_id = hid;

    RETURN total;

END //

DELIMITER ;

DELIMITER //

CREATE TRIGGER before_insert_billing

BEFORE INSERT
ON Billing

FOR EACH ROW

BEGIN

    IF NEW.total_amount < 0 THEN

        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Amount cannot be negative';

    END IF;

END //

DELIMITER ;

SELECT
    p.patient_name,
    d.doctor_name

FROM Patient p

INNER JOIN Appointment a
ON p.patient_id = a.patient_id

INNER JOIN Doctor d
ON a.doctor_id = d.doctor_id;

SELECT
    p.patient_name,
    r.notes

FROM Patient p

LEFT JOIN RecordTable r
ON p.patient_id = r.patient_id;

SELECT
    d.doctor_name,
    a.appointment_date

FROM Appointment a

RIGHT JOIN Doctor d
ON a.doctor_id = d.doctor_id;

SELECT COUNT(*) AS total_patients
FROM Patient;

SELECT AVG(total_amount) AS average_bill
FROM Billing;

SELECT MAX(consultation_fee) AS highest_fee
FROM Doctor;

SELECT MIN(age) AS youngest_patient
FROM Patient;

SELECT doctor_name
FROM Doctor

WHERE consultation_fee >

(
    SELECT AVG(consultation_fee)
    FROM Doctor
);


CREATE INDEX idx_patient_name
ON Patient(patient_name);

CREATE INDEX idx_doctor_specialization
ON Doctor(specialization);

START TRANSACTION;

UPDATE Billing
SET payment_status = 'Paid'
WHERE bill_id = 2;

COMMIT;

SELECT * FROM Hospital;
SELECT * FROM Doctor;
SELECT * FROM Patient;
SELECT * FROM Appointment;
SELECT * FROM Treatment;
SELECT * FROM Prescription;
SELECT * FROM RecordTable;
SELECT * FROM Billing;
CREATE TABLE LoginCredentials (
    login_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL,
    doctor_id INT NULL,
    patient_id INT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (doctor_id)
    REFERENCES Doctor(doctor_id),

    FOREIGN KEY (patient_id)
    REFERENCES Patient(patient_id)
);

CREATE TABLE SecurityAudit (
    audit_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50),
    login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(50),
    login_status VARCHAR(20)
);

ALTER TABLE LoginCredentials
ADD CONSTRAINT chk_role
CHECK (role IN ('Admin', 'Doctor', 'Patient'));

ALTER TABLE LoginCredentials
ADD CONSTRAINT chk_user_link
CHECK (
    (role = 'Doctor' AND doctor_id IS NOT NULL)
    OR
    (role = 'Patient' AND patient_id IS NOT NULL)
    OR
    (role = 'Admin')
);

INSERT INTO LoginCredentials
(username, password_hash, role)

VALUES
('admin', SHA2('Admin@123', 256), 'Admin');

INSERT INTO LoginCredentials
(username, password_hash, role, doctor_id)

VALUES
('drrajesh', SHA2('Rajesh@123', 256), 'Doctor', 1),

('drpriya', SHA2('Priya@123', 256), 'Doctor', 2),

('drarjun', SHA2('Arjun@123', 256), 'Doctor', 3);

INSERT INTO LoginCredentials
(username, password_hash, role, patient_id)

VALUES
('rahul25', SHA2('Rahul@123', 256), 'Patient', 1),

('sneha30', SHA2('Sneha@123', 256), 'Patient', 2),

('karan40', SHA2('Karan@123', 256), 'Patient', 3);

INSERT INTO SecurityAudit
(username, ip_address, login_status)

VALUES
('admin', '192.168.1.10', 'Success'),

('drrajesh', '192.168.1.11', 'Failed'),

('sneha30', '192.168.1.12', 'Success');

DELIMITER //

CREATE TRIGGER prevent_duplicate_username

BEFORE INSERT
ON LoginCredentials

FOR EACH ROW

BEGIN

    IF EXISTS (
        SELECT *
        FROM LoginCredentials
        WHERE username = NEW.username
    )

    THEN

        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Username already exists';

    END IF;

END //

DELIMITER ;

CREATE INDEX idx_username
ON LoginCredentials(username);

CREATE INDEX idx_role
ON LoginCredentials(role);

SELECT * FROM LoginCredentials;

SELECT * FROM SecurityAudit;

USE MedSynapse;

CREATE TABLE Admin (
    admin_id INT PRIMARY KEY AUTO_INCREMENT,
    admin_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    role VARCHAR(50)
);

CREATE TABLE Ambulance (
    ambulance_id INT PRIMARY KEY AUTO_INCREMENT,
    hospital_id INT,
    driver_name VARCHAR(100),
    vehicle_number VARCHAR(30),
    status VARCHAR(30),

    FOREIGN KEY (hospital_id)
    REFERENCES Hospital(hospital_id)
);

CREATE TABLE Room (
    room_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    room_number VARCHAR(20),
    room_type VARCHAR(50),
    admission_date DATE,
    discharge_date DATE,

    FOREIGN KEY (patient_id)
    REFERENCES Patient(patient_id)
);

CREATE TABLE MedicineInventory (
    medicine_id INT PRIMARY KEY AUTO_INCREMENT,
    medicine_name VARCHAR(100),
    stock_quantity INT,
    expiry_date DATE,
    price DECIMAL(10,2)
);

CREATE TABLE Feedback (
    feedback_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    rating INT,
    comments TEXT,

    FOREIGN KEY (patient_id)
    REFERENCES Patient(patient_id)
);

ALTER TABLE Patient
ADD CONSTRAINT chk_age
CHECK (age > 0);

CREATE VIEW ScheduledAppointments AS

SELECT
    appointment_id,
    appointment_date,
    appointment_time,
    status

FROM Appointment

WHERE status = 'Scheduled';

CREATE TABLE PatientBackup AS
SELECT * FROM Patient;

INSERT INTO Admin
(admin_name, email, phone, role)

VALUES
('Neha Shenoy', 'admin@medsynapse.com', '9999999999', 'Super Admin');

INSERT INTO Ambulance
(hospital_id, driver_name, vehicle_number, status)

VALUES
(1, 'Ramesh Kumar', 'KA01AB1234', 'Available'),

(2, 'Suresh Rao', 'KA02CD5678', 'On Duty');

INSERT INTO Room
(patient_id, room_number, room_type,
admission_date, discharge_date)

VALUES
(1, 'A101', 'Deluxe',
'2026-05-10', '2026-05-15'),

(2, 'B202', 'General',
'2026-05-11', '2026-05-14');

INSERT INTO MedicineInventory
(medicine_name, stock_quantity,
expiry_date, price)

VALUES
('Amlodipine', 100,
'2027-01-01', 120),

('Sumatriptan', 80,
'2027-06-15', 200),

('Paracetamol', 300,
'2028-03-10', 50);

INSERT INTO Feedback
(patient_id, rating, comments)

VALUES
(1, 5, 'Excellent treatment and care'),

(2, 4, 'Good hospital service'),

(3, 5, 'Doctor was very supportive');

DELIMITER //

CREATE PROCEDURE ChangePassword(
    IN uname VARCHAR(50),
    IN newpass VARCHAR(100)
)

BEGIN

    UPDATE LoginCredentials
    SET password_hash = SHA2(newpass, 256)
    WHERE username = uname;

END //

DELIMITER ;

DELIMITER //

CREATE TRIGGER calculate_tax

BEFORE INSERT
ON Billing

FOR EACH ROW

BEGIN

    SET NEW.total_amount =
    NEW.total_amount + (NEW.total_amount * 0.18);

END //

DELIMITER ;

SELECT * FROM Admin;

SELECT * FROM Ambulance;

SELECT * FROM Room;

SELECT * FROM MedicineInventory;

SELECT * FROM Feedback;

SELECT * FROM ScheduledAppointments;

SELECT * FROM PatientBackup;