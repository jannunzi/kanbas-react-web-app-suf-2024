import HttpClient from "./HttpClient";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjects from "./WorkingWithObjects";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER; // || "http://localhost:4000";
export default function Lab5() {
  return (
    <div>
      <h1>Lab 5</h1>
      <a href={`${REMOTE_SERVER}/lab5`}>
        <h2>Go to Lab 5</h2>
      </a>
      <hr />
      Environment Variable: {REMOTE_SERVER}
      <PathParameters />
      <QueryParameters />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <HttpClient />
      <WorkingWithArraysAsynchronously />
    </div>
  );
}
