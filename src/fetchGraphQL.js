// Axios
import axios from "axios";
const fetchGraphQL = async (text, variables) => {
  const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

  // Fetch data from Github's GraphQL API:
  const requestBody = JSON.stringify({ query: text, variables });
  const response = await axios.post(
    "https://api.github.com/graphql",
    requestBody,
    { headers: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}` }
  );
  return await response.json();
};

export default fetchGraphQL;
