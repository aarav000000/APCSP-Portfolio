if (patient.infected === true){
    updatedPatient.daysInfected += 1
    updatedPatient.coolDownDays = 0
   }
   if (patient.daysInfected === 4){
   updatedPatient.quarantined = true
   }
  if (patient.quarantined === true){
   updatedPatient.daysQuarantined += 1
  }
  if (patient.daysQuarantined === 5){
    updatedPatient.quarantined = false
    updatedPatient.infected = false
    updatedPatient.daysInfected = 0
    updatedPatient.daysQuarantined = 0
    updatedPatient.coolDown = true
  }
  if (patient.coolDown === true){
    updatedPatient.coolDownDays += 1
  }
  if (patient.coolDownDays === 10){
    updatedPatient.coolDown = false    
  }
