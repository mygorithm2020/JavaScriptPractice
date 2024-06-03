import http from "k6/http";

export const options = {
  vus: 500,
  duration: "6s",
};

export default function () {
  http.get("http://localhost:8000");
}
