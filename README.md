# EHR MEDICAL RECORD Hardhat Project




# Patient Record Smart Contract

This is a Solidity smart contract for managing patient records. The contract allows authorized doctors to add and update patient records, grant access to other doctors, and revoke access. The contract also provides functions for administrators to manage doctors and patients.

## License

This contract is licensed under the MIT License. Please see the LICENSE file for more information.

## Prerequisites

Solidity version: ^0.8.0

## Contract Details

### Structs

1. Record: Represents a patient record containing various details.

    vitalSigns: An array of 7 vital signs.
    treatmentDetails: An array of 3 treatment details.
    vaccine: An array of 3 vaccine details.
    prescription: An array of 3 prescription details.
    billing: An array of 4 billing details.
    service: An array of 4 service details.
    amount: An array containing a single amount value.

2. Access: Represents access granted to a doctor for a specific patient.

    grantedAddress: The address of the doctor being granted access.
    hasAccess: A boolean indicating whether the doctor has access.

## Storage

The contract maintains the following mappings and arrays:

    patientRecords: Maps patient addresses to an array of their records.
    admins: Maps admin addresses to a boolean value indicating admin status.
    doctors: Maps doctor addresses to a boolean value indicating doctor status.
    patients: Maps patient addresses to a boolean value indicating patient status.
    accessList: Maps patient addresses to an array of Access structs representing granted access.

## Modifiers

    onlyAuthorizedDoctor: A modifier that allows only authorized doctors to perform certain actions on patient records.
    onlyAdmin: A modifier that allows only administrators to perform certain actions.

## Events

The contract emits the following events:

    PatientRecordAdded: Triggered when a new patient record is added.
    PatientRecordUpdated: Triggered when an existing patient record is updated.
    AccessGranted: Triggered when access is granted to a doctor.
    AccessRevoked: Triggered when access is revoked from a doctor.

## Constructor

The constructor initializes the contract by setting the initial admin, doctor, and patient addresses.

## Functions

The contract provides the following functions:

    addPatientRecord: Allows an authorized doctor to add a new patient record.
    updatePatientRecord: Allows an authorized doctor to update an existing patient record.
    getPatientRecord: Retrieves patient records based on the provided patient address.
    hasAccess: Checks if a doctor has access to a patient's records.
    grantAccess: Allows a patient to grant access to a doctor.
    revokeAccess: Allows a patient to revoke access from a doctor.
    addDoctor: Allows an admin to add a new doctor.
    removeDoctor: Allows an admin to remove a doctor.
    removePatient: Allows an admin to remove a patient.
    isAdmin: Checks if an address is an admin.
    isDoctor: Checks if an address is a doctor.


Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```