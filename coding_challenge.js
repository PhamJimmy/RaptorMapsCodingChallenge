import calcDistance from './calculate_distance.js';
import data from './api_technician_response_data.json' assert { type: 'json' };

/**
 * Create a script in a programming language of your choosing that will loop over the
 * time steps provided and calculate the distance between each technician at each
 * point in time. In your script, flag each point in time where technicians are within
 * 1000 feet (304.8 meters) of each other.
 */

const kilometersToFeet = (kilometers) => {
  return kilometers * 3280.8398950131;
};

const getTimesWhenTechsInRange = () => {
  const result = [];

  data.forEach(({ features }) => {
    for (let i = 0; i < features.length - 1; i++) {
      for (let j = i + 1; j < features.length; j++) {
        const distance = kilometersToFeet(
          calcDistance(features[i].geometry.coordinates, features[j].geometry.coordinates)
        );
        if (distance < 1000) {
          techsWithinRange.push({
            timeInEpochSeconds: features[i].properties.tsecs,
            name1: features[i].properties.name,
            name2: features[j].properties.name,
            distanceInFeet: distance,
          });
        }
      }
    }
  });

  return result;
};

console.log(getTimesWhenTechsInRange());
