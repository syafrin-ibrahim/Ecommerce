import React from 'react'
import { IconSignOut, IconUser, IconHistory, IconLock } from "../../assets"
export const dummyMenu = [
   {
    id : 1,
    nama : 'Edit Profile',
    gambar : <IconUser />,
    page : 'EditProfile'
   }, 
   {
    id : 2,
    nama : 'Change Password',
    gambar : <IconLock />,
    page : 'ChangePassword'
   }, 
   {
    id : 3,
    nama : 'History Pemesanan',
    gambar : <IconHistory />,
    page : 'History'
   }, 
   {
    id : 4,
    nama : 'Sign Out',
    gambar : <IconSignOut />,
    page : 'Login'
   }, 
]
   
