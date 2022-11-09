import { Routes, Route } from "react-router-dom";
import Image from 'react-bootstrap/Image';

// landing pages
import Plans from './landing/Plans';
import RealEstate from './landing/RealEstate';
import AboutUs from './landing/AboutUs';
import Contacts from './landing/Contacts';
import FAQ from './landing/FAQ';
import Home from './landing/Home';
import NotFound from './landing/404';

//auth pages
import Index from './auth/';
import ForgotPassword from './auth/ForgotPassword';
import ForgotPasswordRequest from './auth/ForgotPasswordRequest';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import TC from './auth/TC';
import VerifyEmail from './auth/VerifyEmail';

// user dashboard pages
import UserDashboard from "./users/UserDashboard";
import Deposit from './users/Deposit';
import Downlines from './users/Downlines';
import InvestmentPackages from './users/InvestmentPackages';
import Messages from './users/Messages';
import UpdateAccount from './users/UpdateAccount';
import Ticket from './users/Ticket';
import Transactions from './users/Transactions';
import Withdrawal from './users/Withdrawal';
import TwoFa from './users/2Fa';
import Security from './users/Security';

//admin pages
import AdminDashboard from "./admin/AdminDashboard";
import AdminDeposit from './admin/Deposit';
import AdminDownlines from './admin/Downlines';
import AdminInvestment from './admin/Investment';
import AdminUsers from './admin/Users';
import AdminAppConfig from './admin/AppConfig';
import AdminInvestmentPackages from './admin/Plans';
import AdminMessages from './admin/Messages';
import AdminWithdrawal from './admin/Withdrawal';

//certificate model page
import Certificate from "./certificate/Certificate";



export default function Pages() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="plans" element={<Plans />} />
                <Route path="real-estate" element={<RealEstate />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="contact" element={<Contacts />} />
                <Route path="faq" element={<FAQ />} />
            </Route>

            <Route path="/auth">
                <Route path="" element={<Index />} />
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />
                <Route path="forgot-password-request" element={<ForgotPasswordRequest />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="tc" element={<TC />} />
                <Route path="verify-email" element={<VerifyEmail />} />
            </Route>

            <Route path="/dashboard">
                <Route path="" element={<UserDashboard />} />
                <Route path="deposit" element={<Deposit />} />
                <Route path="withdrawal" element={<Withdrawal />} />
                <Route path="downlines" element={<Downlines />} />
                <Route path="plans" element={<InvestmentPackages />} />
                <Route path="messages" element={<Messages />} />
                <Route path="update-account" element={<UpdateAccount />} />
                <Route path="ticket" element={<Ticket />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="security" element={<Security />} />
                <Route path="two-Factor-auth" element={<TwoFa />} />
            </Route>

            <Route path="/admin">
                <Route path="" element={<AdminDashboard />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="app-config" element={<AdminAppConfig />} />
                <Route path="deposit" element={<AdminDeposit />} />
                <Route path="withdrawal" element={<AdminWithdrawal />} />
                <Route path="downlines" element={<AdminDownlines />} />
                <Route path="plans" element={<AdminInvestmentPackages />} />
                <Route path="investment" element={<AdminInvestment />} />
                <Route path="messages" element={<AdminMessages />} />
            </Route>

            <Route path="certificate/1668012585323" element={<Certificate />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

