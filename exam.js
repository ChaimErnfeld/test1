let militaryUnit = {
  name: "1st Infantry Division",

  location: "Fort Bragg, North Carolina, USA",

  establishmentDate: "1941-06-01",

  unitType: "Infantry Division",

  commandStructure: {
    commandingOfficer: {
      rank: "Major General",

      name: "John Doe",

      contact: {
        email: "john.doe@example.com",

        phone: "+1-555-123-4567",
      },
    },

    executiveOfficer: {
      rank: "Colonel",

      name: "Jane Smith",

      contact: {
        email: "jane.smith@example.com",

        phone: "+1-555-987-6543",
      },
    },

    chiefOfStaff: {
      rank: "Brigadier General",

      name: "Robert Brown",

      contact: {
        email: "robert.brown@example.com",

        phone: "+1-555-555-1234",
      },
    },
  },

  personnel: [
    {
      id: 1,

      name: "Private First Class Alice Johnson",

      rank: "Private First Class",

      role: "Rifleman",

      contact: {
        email: "alice.johnson@example.com",

        phone: "+1-555-000-1111",
      },
    },

    {
      id: 2,

      name: "Sergeant Michael White",

      rank: "Sergeant",

      role: "Squad Leader",

      contact: {
        email: "michael.white@example.com",

        phone: "+1-555-000-2222",
      },
    },
  ],

  equipment: {
    vehicles: [
      {
        type: "M1 Abrams Tank",

        quantity: 20,

        status: "Operational",
      },

      {
        type: "Humvee",

        quantity: 50,

        status: "Operational",
      },
    ],

    firearms: [
      {
        type: "M16 Rifle",

        quantity: 500,

        status: "Operational",
      },

      {
        type: "M249 SAW",

        quantity: 100,

        status: "Operational",
      },
    ],

    otherEquipment: [
      {
        type: "Night Vision Goggles",

        quantity: 150,

        status: "Operational",
      },

      {
        type: "Field Radios",

        quantity: 100,

        status: "Operational",
      },
    ],
  },

  missions: [
    {
      missionName: "Operation Desert Storm",

      startDate: "1991-01-17",

      endDate: "1991-02-28",

      description: "Combat operation to liberate Kuwait from Iraqi occupation.",
    },

    {
      missionName: "Operation Enduring Freedom",

      startDate: "2001-10-07",

      endDate: "2014-12-28",

      description:
        "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
    },
  ],

  trainingPrograms: [
    {
      programName: "Basic Combat Training",

      duration: 10,

      focus:
        "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
    },

    {
      programName: "Advanced Individual Training",

      duration: 12,

      focus:
        "Specialized training for specific military occupational specialties.",
    },
  ],

  history: [
    {
      eventDate: "1941-06-01",

      eventDescription: "Establishment of the 1st Infantry Division.",
    },

    {
      eventDate: "1944-06-06",

      eventDescription: "Participated in the D-Day landings in Normandy.",
    },
  ],

  currentDeployment: {
    location: "Middle East",

    mission: "Counter-terrorism operations",

    startDate: "2024-01-01",

    estimatedEndDate: "2024-12-31",
  },
};

function Mission1(unit) {
  let command = unit.commandStructure.chiefOfStaff;
  return `${command.rank} ${command.name}, ${command.contact.phone}`;
}

function Mission2(unit) {
  let soldiers = unit.personnel;
  let sumOfSoldiers = 0;
  for (const soldier in soldiers) {
    sumOfSoldiers += 1;
  }
  return String(sumOfSoldiers);
}

function Mission3(NewDeployment, unit) {
  let newItemToHistory = {
    eventDate: unit.currentDeployment.estimatedEndDate,
    eventDescription:
      unit.currentDeployment.mission + "in" + unit.currentDeployment.location,
  };
  unit.history.push(newItemToHistory);
  unit.currentDeployment.location = NewDeployment.location;
  unit.currentDeployment.mission = NewDeployment.mission;
  unit.currentDeployment.startDate = NewDeployment.startDate;
  unit.currentDeployment.estimatedEndDate = NewDeployment.estimatedEndDate;
  return unit;
}

function Mission4(FirearmObject, unit) {
  let result = false;
  for (const key in unit.equipment.firearms) {
    if (FirearmObject.type == key.type && FirearmObject.status == key.status) {
      result = true;
    }
  }
  if (result == false) {
    unit.equipment.firearms.push(FirearmObject);
  } else {
    unit.equipment.firearms.forEach((element) => {
      if (
        FirearmObject.type == element.type &&
        FirearmObject.status == element.status
      ) {
        element.quantity += 1;
      }
    });
  }
  return unit;
}
console.log(
  Mission5(
    {
      type: "M16 Rifle",

      quantity: 500,

      status: "Operational",
    },
    militaryUnit
  ).equipment.firearms
);

function Mission5(unit) {
  let sum = 0;
  unit.trainingPrograms.forEach((element) => {
    sum += element.duration;
  });
  return String(sum);
}

module.exports = {
  Mission1,
};
