import CMS from 'netlify-cms'

import DonatePreview from './preview-templates/DonatePreview'
import TestimonialPreview from './preview-templates/TestimonialsListPreview'
import EventPreview from './preview-templates/EventPreview'
import HomePreview from './preview-templates/HomePreview'
import SingerListPreview from './preview-templates/SingerListPreview'
import VideoListPreview from './preview-templates/VideoListPreview'

import siteStyle from './../assets/scss/main.scss'

CMS.registerPreviewStyle(siteStyle)

//preview template names has to match names in config.yml
CMS.registerPreviewTemplate('donate', DonatePreview)
CMS.registerPreviewTemplate('testimonialList', TestimonialPreview)
CMS.registerPreviewTemplate('eventsList', EventPreview)
CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('singerList', SingerListPreview)
CMS.registerPreviewTemplate('videoList', VideoListPreview)
