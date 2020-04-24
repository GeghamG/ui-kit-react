import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImageStyled = styled.img`
`

const Image = (props) => <ImageStyled {...props} />

Image.propTypes = {
	src: PropTypes.string
}

Image.defaultProps = {
	src: null
}

export default Image