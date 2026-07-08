# ER Diagram

## Overview

The Entity-Relationship (ER) Diagram represents the database structure of the Book a Doctor application. It consists of three main entities: Users, Doctors, and Appointments. These entities are connected through primary keys and foreign keys to manage user accounts, doctor profiles, and appointment bookings efficiently.

---

## Entities

### 1. Users

The Users entity stores information about patients, doctors, and administrators.

**Attributes**

- _id (Primary Key)
- name
- email
- notification
- password
- isdoctor
- type
- phone

---

### 2. Doctors

The Doctors entity stores doctor-specific information.

**Attributes**

- _id (Primary Key)
- userID (Foreign Key → Users._id)
- fullname
- email
- timings
- phone
- address
- specialisation
- status
- experience
- fees

---

### 3. Appointments

The Appointments entity stores appointment details between users and doctors.

**Attributes**

- _id (Primary Key)
- doctorInfo (Foreign Key → Doctors._id)
- userInfo (Foreign Key → Users._id)
- date
- document
- status

---

## Relationships

- One User is linked to one Doctor (1:1).
- One User can book multiple Appointments (1:N).
- One Doctor can manage multiple Appointments (1:N).

---

## Conclusion

The ER Diagram illustrates the relationships between Users, Doctors, and Appointments. It provides a clear database structure that supports appointment booking, doctor management, and efficient data organization within the Book a Doctor application.
