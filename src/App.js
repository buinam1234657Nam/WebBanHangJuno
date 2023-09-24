import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout.js';
import publicRouter from './routers';
import { Fragment, useState } from 'react';
function App() {
    return (
        <div className="App">
            <Routes>
                {publicRouter.map((item, index) => {
                    let Layout = DefaultLayout;
                    const Page = item.container;
                    if (item.childrenOnly) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={item.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
