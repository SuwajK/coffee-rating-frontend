import React from "react";
import {RadioGroup, Radio} from "@material-ui/core";

const FormikRadioGroup = ({field, form: {touched, errors}, name, options, onChange, ...props}) => {

  const fieldName = name || field.name;

  return (
    <>
      <RadioGroup {...field} {...props} name={fieldName}>
        {options && options.map(option => (<label key={option.value}>
            <Radio
              value={option.value}
              checked={field.value/1 === option.value}
              onChange={field.onChange}
              label={option.label}
              id={fieldName}
            />
            {option.label}
          </label>
        ))}
      </RadioGroup>

      {touched[fieldName] && errors[fieldName] && (
        <>{errors[fieldName]}</>
      )}
    </>
  );
};

export default FormikRadioGroup;
