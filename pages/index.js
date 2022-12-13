import { yupResolver } from '@hookform/resolvers/yup'
import Head from 'next/head'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import 'yup-phone'

import {
  ErrorCard,
  Footer,
  FormElement,
  HeroImage,
  SuccessCard,
  WarningCard,
} from '../components/index'
import formatPhoneNumber from '../helpers/formatPhoneNumber'
import styles from '../styles/Home.module.css'

export default function Home() {
  const schema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phone: Yup.string().phone().required(),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  })

  const [isError, setIsError] = useState(null)
  const [inputPhoneValue, setInputPhoneValue] = useState('')
  const [urlValue, setUrlValue] = useState('/api/form-submission')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async data => {
    fetch(urlValue, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(res => {
      if (res.status === 200) {
        setIsError(false)
        console.log(res)
        console.log(isError)
      } else {
        setIsError(true)
      }
    })
  }

  const handlePhoneInput = e => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value)
    setInputPhoneValue(formattedPhoneNumber)
  }

  return (
    <>
      <Head>
        <title>AllBirds Demo App | Gustavo Malamud</title>
        <meta
          name="description"
          content="AllBirds Demo App - Gustavo Malamud"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.sectionContainer}>
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <HeroImage />
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* First Name  */}
                <FormElement title="First name">
                  <input
                    {...register('firstName')}
                    className={styles.inputElement}
                    placeholder="First Name"
                  />

                  {errors.firstName && (
                    <WarningCard>{errors.firstName?.message}</WarningCard>
                  )}
                </FormElement>

                {/* Last Name  */}
                <FormElement title="Last Name">
                  <input
                    {...register('lastName')}
                    className={styles.inputElement}
                    placeholder="Last Name"
                  />
                  {errors.lastName && (
                    <WarningCard>{errors.lastName?.message}</WarningCard>
                  )}
                </FormElement>

                {/* Phone  */}
                <FormElement title="Phone">
                  <input
                    {...register('phone')}
                    onChange={e => handlePhoneInput(e)}
                    value={inputPhoneValue}
                    className={styles.inputElement}
                    placeholder="(xxx) xxx-xxxx"
                  />
                  {errors.phone && (
                    <WarningCard>{errors.phone?.message}</WarningCard>
                  )}
                </FormElement>

                {/* Email  */}
                <FormElement title="E-Mail">
                  <input
                    {...register('email')}
                    className={styles.inputElement}
                    placeholder="your@email.here"
                  />
                  {errors.email && (
                    <WarningCard>{errors.email?.message}</WarningCard>
                  )}
                </FormElement>

                {/* Password  */}
                <FormElement title="Password">
                  <input
                    type="password"
                    {...register('password')}
                    className={styles.inputElement}
                  />
                  {errors.password && (
                    <WarningCard>{errors.password?.message}</WarningCard>
                  )}
                </FormElement>

                {/* Password Confirmation */}
                <FormElement title="Password Confirmation">
                  <input
                    type="password"
                    {...register('confirmPassword')}
                    className={styles.inputElement}
                  />
                  {errors.confirmPassword && (
                    <WarningCard>{errors.confirmPassword?.message}</WarningCard>
                  )}
                </FormElement>

                {/* Submit Buttons */}
                <input
                  type="submit"
                  value="Send Request"
                  className={styles.sendRequest}
                  onClick={() => {
                    setUrlValue('/api/form-submission')
                  }}
                />
                <input
                  type="submit"
                  value="Send Failed Request"
                  className={styles.sendFailedRequest}
                  onClick={() => {
                    setUrlValue('/api/form-error')
                  }}
                />
                {isError === true && <ErrorCard />}
                {isError === false && <SuccessCard />}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
