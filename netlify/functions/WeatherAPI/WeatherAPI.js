const handler = async (event) => {
  try {
    const apiKEY = process.env.WeatherAPI;
    const response = await fetch(`https://stirring-khapse-dd80ba.netlify.app/.netlify/functions/WeatherAPI?api_key=${apiKEY}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
