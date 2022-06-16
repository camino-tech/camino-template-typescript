import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap'
import Spinner from '../components/Spinner'
import { getGoals } from '../features/goals/goalSlice'
import { reset } from '../features/auth/authSlice'


function Dashboard() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  // @ts-ignore
  const { user } = useSelector((state) => state.auth)
  // @ts-ignore
  const { isLoading, isError, message } = useSelector((state) => state.goals)

  // const { goals, isLoading, isError, message } = useSelector((state) => state.goals)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }
    
    // @ts-ignore
    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <div className='center'>
      <Container>
        <Row>
          <section>
            <h1>Welcome {user && user.name}</h1>
            <p>Goals Dashboard</p>
          </section>
        </Row>
        <Row>
          <GoalForm />
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
