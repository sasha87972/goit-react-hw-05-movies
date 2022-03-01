import { Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Navigation from "./components/navigation";
import Loader from "./components/loader";
import Cast from "./views/Cast";
import Reviews from "./views/Reviews";

const HomePage = lazy(() => import("./views/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));
const WrongUrl = lazy(() => import("./views/WrongUrl"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<WrongUrl />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
