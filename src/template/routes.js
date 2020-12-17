import React from 'react'

const Dashboard = React.lazy(() => import('../views/dashboard'));
const Siswa = React.lazy(() => import('../views/siswa'));
const TahunPelajaran = React.lazy(() => import('../views/tahun-pelajaran'));

const routes = [
    { path: '/', exact: true, name: 'Dashboard', component: Dashboard, },
    { path: '/tahun-pelajaran', exact: true, name: 'Tahun Pelajaran', component: TahunPelajaran, },
    { path: '/siswa', exact: true, name: 'Siswa', component: Siswa, },
];

export default routes;