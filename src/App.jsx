import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import CityList from "./components/CityList"
import CountryList from "./components/CountyList"
import City from "./components/City";
import Form from "./components/Form"
import SpinnerFullPage from "./components/SpinnerFullPage";
const Homepage=lazy(()=> import("./pages/Homepage"))
const Product=lazy(()=> import("./pages/Product"))
const Pricing=lazy(()=> import("./pages/Pricing"))
const Login=lazy(()=> import("./pages/Login"))
const AppLayout=lazy(()=> import("./pages/AppLayout"))
const PageNotFound=lazy(()=> import("./pages/PageNotFound"))

/*-dist/index.html                   0.48 kB │ gzip:   0.31 kB
dist/assets/index-ab3f534d.css   30.13 kB │ gzip:   5.06 kB
dist/assets/index-9e264922.js   524.66 kB │ gzip: 148.66 kB*/
export default function App() {
    return (
        <AuthProvider>
            <CitiesProvider>
                <BrowserRouter>
                <Suspense fallback={<SpinnerFullPage/>}>

                    <Routes>
                        <Route index element={<Homepage />} />
                        <Route path="product" element={<Product />} />
                        <Route path="pricing" element={<Pricing />} />
                        <Route
                            path="app"
                            element={
                                <ProtectedRoute>
                                    <AppLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route
                                index
                                element={<Navigate replace to="cities" />}
                            />
                            <Route path="cities" element={<CityList />} />
                            <Route path="cities/:id" element={<City />} />
                            <Route path="countries" element={<CountryList />} />
                            <Route path="form" element={<Form />} />
                        </Route>
                        <Route path="login" element={<Login />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
                </BrowserRouter>
            </CitiesProvider>
        </AuthProvider>
    );
}
