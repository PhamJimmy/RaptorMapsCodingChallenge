// Calculate the distance between 2 points on a sphere via the haversine formula

// Earth's radius in km
const RADIUS = 6371;

const degreesToRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

const calcHaversine = (lon1, lat1, lon2, lat2) => {
  const latDistance = degreesToRadians(lat2 - lat1);
  const lonDistance = degreesToRadians(lon2 - lon1);
  return (
    Math.sin(latDistance / 2) * Math.sin(latDistance / 2) +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat2)) *
      Math.sin(lonDistance / 2) *
      Math.sin(lonDistance / 2)
  );
};

const calcDistance = (coordinates1, coordinates2) => {
  const haversine = calcHaversine(...coordinates1, ...coordinates2);
  return 2 * RADIUS * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
};

// Sanity check: Los Angeles to New York should be around 3,936 km
// const LA = [34.0522, -118.2437];
// const NY = [40.7128, -74.006];
// console.log(calcDistance(LA, NY));
// Output: 3935.746254609722, IT WORKS

export default calcDistance;
