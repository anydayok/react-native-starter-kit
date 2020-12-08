import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import compose from 'lodash/fp/compose';
import {withFormik} from 'formik';

import i18n from '../../locales/i18next';
import {schemaLogin} from '../../constants/schema';
import {login, loginClean} from '../../store/redux/auth/login';
import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from './style';

type PropsT = {
  navigation: {
    navigate: function,
  },
  values: {
    email: string,
    password: string,
  },
  errors: Object,
  handleSubmit: Function,
  handleChange: Function,
  handleBlur: Function,
  touched: Function,
  loginCleanError: Function,
  serverErrorMessage: string,
};

type StateT = {};

class Login extends Component<PropsT, StateT> {
  cleanError = () => {
    this.props.loginCleanError();
  };

  render() {
    const {
      values,
      errors,
      handleSubmit,
      handleChange,
      handleBlur,
      touched,
      serverErrorMessage,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <View style={styles.block}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Go to Home</Text>
          </TouchableWithoutFeedback>
        </View>
        <Input
          value={values.email}
          title={i18n.t('pages.login.emailTitle')}
          placeholder={i18n.t('pages.login.emailPlaceholder')}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
          onFocus={this.cleanError}
          secureTextEntry={false}
        />
        <Input
          value={values.password}
          title={i18n.t('pages.login.passwordTitle')}
          placeholder={i18n.t('pages.login.passwordPlaceholder')}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touched={touched.password}
          onFocus={this.cleanError}
          secureTextEntry
        />
        {serverErrorMessage && serverErrorMessage.length && (
          <Text style={styles.error}>{serverErrorMessage}</Text>
        )}
        <Button handleSubmit={handleSubmit} text="Login" />
      </View>
    );
  }
}

export default compose(
  connect(
    ({auth}) => ({
      loading: auth.login.loading,
      serverErrorMessage: auth.login.error,
    }),
    (dispatch) => bindActionCreators({login, loginClean}, dispatch),
  ),
  withFormik({
    mapPropsToValues: () => {
      return {email: 'eve.holt@reqres.in', password: 'cityslicka'};
    },
    validationSchema: schemaLogin,
    validateOnChange: true,
    handleSubmit: (values, {props, setSubmitting}) => {
      props.login({
        email: values.email,
        password: values.password,
      });
      if (!props.error) {
        setSubmitting(false);
      }
    },
  }),
)(Login);
