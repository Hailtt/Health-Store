import KsLayout from '@/layout';
import { GroupInput } from '@components/compound';
import { Button, Link } from '@components/primitive';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Auth = () => {
  const LoginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: (v) => {
      console.log('Submit', v);
      LoginForm.resetForm();
    },
  });

  const RegisterForm = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(),
    }),
    onSubmit: () => {
      RegisterForm.resetForm();
    },
  });

  return (
    <KsLayout title="Tài khoản">
      <div className="ks-auth">
        <div className="ks-container content">
          <h1 className="title">My account</h1>
          <div className="wrapper row">
            <div className="column login col-md-6 col-12">
              <div className="form -left">
                <h3 className="header">Đăng Nhập</h3>
                <div className="group">
                  <p className="label">
                    Tài khoản hoặc Email
                    <span className="required">*</span>
                  </p>
                  <GroupInput
                    className="container -mb-10"
                    type="email"
                    placeholder="Nhập tài khoản của bạn..."
                    fadePlaceholderShown
                    name="email"
                    value={LoginForm.values.email}
                    error={LoginForm.errors.email}
                    touched={LoginForm.touched.email}
                    onChange={({ name, value }: { name: string; value: string | number }) =>
                      LoginForm.setFieldValue(name, value)
                    }
                  />

                  <p className="label">
                    Mật khẩu
                    <span className="required">*</span>
                  </p>
                  <GroupInput
                    className="container -mb-10"
                    placeholder="Nhập mật khẩu của bạn..."
                    type="password"
                    name="password"
                    value={LoginForm.values.password}
                    onChange={({ name, value }: { name: string; value: string | number }) =>
                      LoginForm.setFieldValue(name, value)
                    }
                    error={LoginForm.errors.password}
                    touched={LoginForm.touched.password}
                  />

                  <div className="actions">
                    <FormControlLabel
                      control={<Checkbox size="small" color="default" />}
                      className="icon"
                      label="Remember me"
                    />
                    <Link className="link" href="/" title="forgot-password">
                      Quên mật khẩu?
                    </Link>
                  </div>

                  <Button fullWidth className="button" onClick={() => LoginForm.handleSubmit()}>
                    ĐĂNG NHẬP
                  </Button>
                </div>
              </div>
            </div>
            <div className="column register col-md-6 col-12">
              <div className="form -right">
                <h3 className="header">Đăng Ký</h3>
                <div className="group">
                  <p className="label">
                    Email
                    <span className="required">*</span>
                  </p>
                  <GroupInput
                    className="container -mb-10"
                    type="text"
                    placeholder="Nhập email của bạn..."
                    name="email"
                    value={RegisterForm.values.email}
                    onChange={({ name, value }: { name: string; value: string | number }) =>
                      RegisterForm.setFieldValue(name, value)
                    }
                    error={RegisterForm.errors.email}
                    touched={RegisterForm.touched.email}
                  />
                  <p className="notice">A password will be sent to your email address.</p>
                  <p className="description">
                    Your personal data will be used to support your experience throughout this
                    website, to manage access to your account, and for other purposes described in
                    our privacy policy.
                  </p>

                  <Button fullWidth className="button" onClick={() => RegisterForm.handleSubmit()}>
                    ĐĂNG KÝ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </KsLayout>
  );
};

export default Auth;
