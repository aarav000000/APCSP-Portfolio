export const updatePopulation = (
    population: Patient[],
    params: SimulationParameters
   ): Patient[] => {
    // Run updatePatient once per patient to create *new* patients for new round.
    return population.map((patient) =>
      updatePatient(patient, population, params)
    );
   };
   