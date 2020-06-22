# Case Study

CasaOne rents furniture to consumers. We need to ensure orders which don’t meet certain criterion are reviewed by credit officers before fulfillment.

CasaOne’s credit officers decide the rules to determine this. These rules change from time to time. Hence, they need a Rules Editor UI which allows them to manage(add, edit, delete) these rules in the system. During order placement, these rules will be executed by the backend service against the order details to decide if this order should be reviewed

Example Rules which will be added by credit officers:

If monthly rental amount > $1000 and customer age < 21

If monthly rental amount > $2000 and customer’s zip code is one of the x,y,z

If monthly rental amount <= $1000 and has a TV in the order

If rental tenure < 3 months

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

### Install

Follow the following steps to get development environment running.

* Clone the project

* npm install

* npm run start

* launch http://localhost:3000
