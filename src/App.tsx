// import { useState } from 'react'
import React, { useEffect, useRef } from "react";
import './App.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useFormik } from 'formik';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import axios from "axios";
import { useNavigate} from 'react-router-dom'


function App() {

  const toast = useRef(null);
  const navigate = useNavigate();

//   useEffect(() => {
//     getAllClient();
//   }, [])

//   const getAllClient = () => {
//     axios.get('https://demo.globalqss.com/api/v1/auth/roles?client={{clientId}}')
//   }

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'Login Success' });
    };

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
            parameters: {
                clientId: '11',
                roleId: '102',
                organizationId: '11',
                warehouseId: '103',
                language: 'en_US'
            }
            
        },
        validate: (data) => {
            let errors = {};

            if (!data.userName) {
                errors.userName = 'Username is required.';
            }

            if (!data.password) {
              errors.password = 'Password is required.';
            }

            // if (!data.parameters.clientId) {
            //     errors.clientId = 'ClientId is required.';
            // }

            // if (!data.parameters.roleId) {
            //     errors.roleId = 'RoleId is required.';
            // }

            // if (!data.parameters.organizationId) {
            //     errors.organizationId = 'OrganizationId is required.';
            // }

            // if (!data.parameters.warehouseId) {
            //     errors.warehouseId = 'WarehouseId is required.';
            // }

            // if (!data.parameters.language) {
            //     errors.language = 'Language is required.';
            // }

            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
            axios.post('https://demo.globalqss.com//api/v1/auth/tokens', data)
            .then(res => {
                localStorage.setItem("auth", res.data.token);
                navigate('/assets')
            })
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };


    return (
        <div className="card flex justify-content-center mt-5">
            <Toast ref={toast} />
            <Card title="Login">
                <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                    <span className="p-float-label">
                        <InputText
                            id="userName"
                            name="userName"
                            value={formik.values.userName}
                            onChange={(e) => {
                                formik.setFieldValue('userName', e.target.value);
                            }}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('userName') })}
                        />
                        <label htmlFor="input_value">Username</label>
                    </span>
                    {getFormErrorMessage('userName')}

                    <span className="p-float-label">
                        <InputText
                            id="password"
                            name="password"
                            type="password"
                            value={formik.values.password}
                            onChange={(e) => {
                                formik.setFieldValue('password', e.target.value);
                            }}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('password') })}
                        />
                        <label htmlFor="input_value">Password</label>
                    </span>
                    {getFormErrorMessage('password')}

                    <span className="p-float-label">
                        <InputText
                            id="clientId"
                            name="clientId"
                            value={formik.values.parameters.clientId}
                            onChange={(e) => {
                                formik.setFieldValue('parameters.clientId', e.target.value);
                            }}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('clientId') })}
                        />
                        <label htmlFor="input_value">ClientId</label>
                    </span>
                    {getFormErrorMessage('clientId')}


                    <span className="p-float-label">
                        <InputText
                            id="roleId"
                            name="roleId"
                            value={formik.values.parameters.roleId}
                            onChange={(e) => {
                                formik.setFieldValue('parameters.roleId', e.target.value);
                            }}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('roleId') })}
                        />
                        <label htmlFor="input_value">RoleId</label>
                    </span>
                    {getFormErrorMessage('roleId')}

                    <span className="p-float-label">
                        <InputText
                            id="organizationId"
                            name="organizationId"
                            value={formik.values.parameters.organizationId}
                            onChange={(e) => {
                                formik.setFieldValue('parameters.organizationId', e.target.value);
                            }}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('organizationId') })}
                        />
                        <label htmlFor="input_value">OrganizationId</label>
                    </span>
                    {getFormErrorMessage('organizationId')}

                    <span className="p-float-label">
                        <InputText
                            id="warehouseId"
                            name="warehouseId"
                            value={formik.values.parameters.warehouseId}
                            onChange={(e) => {
                                formik.setFieldValue('parameters.warehouseId', e.target.value);
                            }}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('warehouseId') })}
                        />
                        <label htmlFor="input_value">WarehouseId</label>
                    </span>
                    {getFormErrorMessage('warehouseId')}

                    <span className="p-float-label">
                        <InputText
                            id="language"
                            name="language"
                            value={formik.values.parameters.language}
                            onChange={(e) => {
                                formik.setFieldValue('parameters.language', e.target.value);
                            }}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('language') })}
                        />
                        <label htmlFor="input_value">Language</label>
                    </span>
                    {getFormErrorMessage('language')}


                    <Button type="submit" label="Submit"/>
                </form>
            </Card>
        </div>
    )
}

export default App
