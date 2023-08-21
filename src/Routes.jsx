import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Membershipplan = React.lazy(() => import("pages/Membershipplan"));
const Searchpage = React.lazy(() => import("pages/Searchpage"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const Myprofilesidebaar = React.lazy(() => import("pages/Myprofilesidebaar"));
const Registration = React.lazy(() => import("pages/Registration"));
const Blog = React.lazy(() => import("pages/Blog"));
const AddaProfile = React.lazy(() => import("pages/AddaProfile"));
const PremiumEscape = React.lazy(() => import("pages/PremiumEscape"));
const AgencyListPAge = React.lazy(() => import("pages/AgencyListPAge"));
const DetaliedListingPage = React.lazy(() =>
  import("pages/DetaliedListingPage"),
);
const Homepage = React.lazy(() => import("pages/Homepage"));
const Frame152 = React.lazy(() => import("pages/Frame152"));
const Banner = React.lazy(() => import("pages/Banner"));
const BannerOne = React.lazy(() => import("pages/BannerOne"));
const Frontpage = React.lazy(() => import("pages/Frontpage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/bannerone" element={<BannerOne />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/frame152" element={<Frame152 />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route
            path="/detaliedlistingpage"
            element={<DetaliedListingPage />}
          />
          <Route path="/agencylistpage" element={<AgencyListPAge />} />
          <Route path="/premiumescape" element={<PremiumEscape />} />
          <Route path="/addaprofile" element={<AddaProfile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/myprofilesidebaar" element={<Myprofilesidebaar />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/searchpage" element={<Searchpage />} />
          <Route path="/membershipplan" element={<Membershipplan />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
