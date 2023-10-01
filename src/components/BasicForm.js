import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux'
import { addRow } from './../redux/table';
import { Button } from '@mui/material';

const BasicForm = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ float: 'left', width: '100%', marginBottom: '10px' }}>
      <Formik
        initialValues={{
          todo: '',
        }}
        onSubmit={(values, helpers) => {
          dispatch(addRow(values.todo));
          values = '';
          helpers.resetForm({
            values,
          });
        }}
      >
        <Form>
          <Field type="text" id="todo" name="todo" placeholder="Add Your Task" />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            size="large"
          >
            ADD
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default BasicForm
