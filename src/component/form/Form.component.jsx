import React from "react";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  FormLabel,
  Select,
} from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";

/**
 * @param {Object} template - template form
 * @param {Function} onSubmit - function handler submit
 * @param {containerClass} containerClass - class style container
 * @param {formClass} formClass - class style form
 * @param {inputClass} inputClass - class style input
 * @param {buttonClass} buttonClass - class style button
 * @param {selectClass} selectClass - class style select
 * @param {labelClass} labelClass - class style label
 * @param {optionClass} optionClass - class style option
 * @param {spanClass} spanClass - class style span
 * @param {headerClass} headerClass - class style header
 * @param {validatorSchema} SchemaYup - bring your own yup schema
 */

export const Form = ({
  onSubmit,
  template,
  formClass,
  inputClass,
  selectClass,
  labelClass,
  optionClass,
  spanClass,
  headerClass,
  validatorSchema,
}) => {
  const { tittle, fields } = template;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validatorSchema),
  });

  const renderFields = (fields) => {
    return fields.map(({ title, type, name, options, value, readOnly }) => {
      return (
        <FormControl isInvalid={errors[name]} key={name}>
          <FormLabel htmlFor={name} className={labelClass} fontSize="sm">
            {title}
          </FormLabel>
          <Input
            type={type}
            name={name}
            autoComplete={`current-${name}`}
            defaultValue={value}
            readOnly={readOnly}
            border="1px solid #e2e8f0"
            {...register(name, { required: true })}
          />
          {type === "hidden" && options && (
            <>
              <Select
                name={name}
                {...register(name)}
                placeholder={"Pilih Tahun ajaran"}
              >
                {options.map(({ value, label }) => (
                  <option key={value} value={value} className={optionClass}>
                    {label}
                  </option>
                ))}
              </Select>
            </>
          )}
          <FormErrorMessage>
            {errors[name] && errors[name]?.message}
          </FormErrorMessage>
        </FormControl>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClass}>
      <h2 className={headerClass}>{tittle}</h2>
      {renderFields(fields)}
      <Button
        isLoading={isSubmitting}
        colorScheme={"teal"}
        mt={4}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};
