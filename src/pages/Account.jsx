import React, { useState } from "react";
import { 
    FiPackage, 
    FiMapPin, 
    FiCreditCard, 
    FiAward, 
    FiUser, 
    FiLogOut 
} from "react-icons/fi";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import "../styles/Account.css";

export default function Account() {
    const { user, logoutAuth } = useAuth();
    const [activeTab, setActiveTab] = useState("orders");

    // Redirect to home if user is completely null (not authenticated)
    if (!user) {
        return <Navigate to="/" replace />;
    }

    const tabs = [
        { id: "orders", icon: <FiPackage />, label: "Order history" },
        { id: "address", icon: <FiMapPin />, label: "Shipping Address" },
        { id: "wallet", icon: <FiCreditCard />, label: "Wallet Details" },
        { id: "loyalty", icon: <FiAward />, label: "Loyalty Rewards" },
        { id: "details", icon: <FiUser />, label: "Account details" }
    ];

    const renderContent = () => {
        switch(activeTab) {
            case "orders":
                return <p className="empty-message">You haven't placed any orders yet.</p>;
            case "address":
                return <p className="empty-message">No shipping addresses saved.</p>;
            case "wallet":
                return <p className="empty-message">Your wallet details will appear here.</p>;
            case "loyalty":
                return <p className="empty-message">Loyalty rewards balance is 0.</p>;
            case "details":
                return (
                    <div className="account-details-view">
                        <h3>Account Details</h3>
                        <div className="details-info-row">
                            <span className="details-label">Mobile Number:</span>
                            <span className="details-value">{user.phone || "Not Set"}</span>
                        </div>
                        <div className="details-info-row">
                            <span className="details-label">User Identifier (UID):</span>
                            <span className="details-value">{user.uid}</span>
                        </div>
                        <div className="details-info-row font-mono">
                            <span className="details-label">Display Name:</span>
                            <span className="details-value">{user.name || "User"}</span>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="account-container">
            <div className="account-card">
                <div className="account-sidebar">
                    <ul>
                        {tabs.map(tab => (
                            <li 
                                key={tab.id}
                                className={activeTab === tab.id ? "active" : ""}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span className="sidebar-icon">{tab.icon}</span>
                                {tab.label}
                            </li>
                        ))}
                        <li className="logout-button" onClick={logoutAuth}>
                            <span className="sidebar-icon"><FiLogOut /></span>
                            Log out
                        </li>
                    </ul>
                </div>
                
                <div className="account-content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
