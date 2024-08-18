import { GatsbyBrowser } from 'gatsby'
import Layout from './src/components/common/Layout'
import './css/prism-coy-without-shadows.css'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}