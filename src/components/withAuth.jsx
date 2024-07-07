import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebaseConfig';

const withAuth = (Component) => {
    return class AuthComponent extends React.Component {
        state = {
            isAuthenticated: false,
            loading: true,
        };

        componentDidMount() {
            this.unsubscribe = auth.onAuthStateChanged(user => {
                if (user) {
                    this.setState({ isAuthenticated: true, loading: false });
                } else {
                    this.setState({ isAuthenticated: false, loading: false });
                }
            });
        }

        componentWillUnmount() {
            this.unsubscribe();
        }

        render() {
            const { isAuthenticated, loading } = this.state;
            if (loading) {
                return <div>Loading...</div>;
            }
            if (!isAuthenticated) {
                return <Navigate to="/login" />;
            }
            return <Component {...this.props} />;
        }
    };
};

export default withAuth;
