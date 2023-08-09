import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@pages/MainPage.vue') },
      {
        path: '/item/:id',
        props: true,
        component: () => import('@pages/ShoppingItemPage.vue')
      },
      {
        path: '/category/:name',
        props: true,
        component: () => import('@pages/CategoryPage.vue')
      }
      //SecureAge Management
      // {
      // 	path: '/sapolicies',
      // 	component: () => import('pages/secureage/SAUserPolicyPage.vue'),
      // },
    ]
  }
  //     {
  //       path: '/addSAPolicy',
  //       component: () => import('pages/secureage/ManageSAPolicyPage.vue')
  //     },
  //     {
  //       path: '/editSAPolicy/:id',
  //       component: () => import('pages/secureage/ManageSAPolicyPage.vue')
  //     },
  //     {
  //       path: '/sagroups',
  //       component: () => import('pages/secureage/SAUserGroupPage.vue')
  //     },
  //     {
  //       path: '/users',
  //       component: () => import('pages/secureage/SAUserPage.vue')
  //     },
  //     //CatchPulse Management
  //     {
  //       path: '/license',
  //       component: () => import('pages/catchpulse/LicensePage.vue')
  //     },
  //     {
  //       path: '/device',
  //       component: () => import('pages/catchpulse/DevicePage.vue')
  //     },
  //     {
  //       path: '/deviceGroup',
  //       component: () => import('pages/catchpulse/GroupPage.vue')
  //     },
  //     {
  //       path: '/policies',
  //       component: () => import('pages/catchpulse/PolicyPage.vue')
  //     },
  //     {
  //       path: '/addPolicy',
  //       component: () => import('pages/catchpulse/ManagePolicyPage.vue')
  //     },
  //     {
  //       path: '/editPolicy/:id',
  //       component: () => import('pages/catchpulse/ManagePolicyPage.vue')
  //     },
  //     {
  //       path: '/request-allowlist/:tab?',
  //       component: () => import('pages/catchpulse/RequestAllowlistPage.vue')
  //     },
  //     {
  //       path: '/global-allowlist',
  //       component: () => import('pages/catchpulse/GlobalAllowlistPage.vue')
  //     },
  //     {
  //       path: '/software-inventory',
  //       component: () => import('pages/catchpulse/SoftwareInventoryPage.vue')
  //     },
  //     {
  //       path: '/untrusted-file/:tab?',
  //       component: () => import('pages/catchpulse/UntrustedFilePage.vue')
  //     },
  //     {
  //       path: '/event-hub',
  //       component: () => import('pages/catchpulse/EventHubPage.vue')
  //     },
  //     {
  //       path: '/vulnerability',
  //       component: () =>
  //         import('pages/catchpulse/VulnerabilityAssessmentPage.vue')
  //     },
  //     //Server Hub Management
  //     {
  //       path: '/administrators',
  //       component: () => import('pages/serverHub/AccountPage.vue')
  //     },
  //     {
  //       path: '/roles',
  //       component: () => import('pages/serverHub/RolePage.vue')
  //     },
  //     //PKI Management
  //     {
  //       path: '/rootCA',
  //       component: () => import('pages/pki/RootCAPage.vue')
  //     },
  //     {
  //       path: '/templates',
  //       component: () => import('pages/pki/CertificateTemplatePage.vue')
  //     },
  //     {
  //       path: '/certificates',
  //       component: () => import('pages/pki/CertificatePage.vue')
  //     },
  //     {
  //       path: '/certRenewalPool',
  //       component: () => import('pages/pki/CertificateRenewalPoolPage.vue')
  //     },
  //     {
  //       path: '/crlmanagement',
  //       component: () => import('pages/pki/CRLPage.vue')
  //     },
  //     //Logs
  //     {
  //       path: '/server-log',
  //       component: () => import('pages/logs/ServerLogPage.vue')
  //     },
  //     //Settings
  //     {
  //       path: '/setting-user',
  //       component: () => import('pages/secureage/SettingsPage.vue')
  //     },

  //     {
  //       path: '/catchpulse-settings',
  //       component: () => import('pages/catchpulse/SettingsPage.vue')
  //     },
  //     {
  //       path: '/setting-general',
  //       component: () => import('pages/serverHub/SettingsPage.vue')
  //     },
  //     {
  //       path: '/setting-pki',
  //       component: () => import('pages/pki/SettingsPage.vue')
  //     },
  //     {
  //       path: '/settings',
  //       component: () => import('pages/SettingsPage.vue')
  //     },
  //     //Store
  //     {
  //       path: '/store',
  //       component: () => import('pages/StorePage.vue')
  //     },
  //     //Download
  //     {
  //       path: '/download',
  //       component: () => import('pages/DownloadPage.vue')
  //     },
  //     //Distributor
  //     {
  //       path: '/distributor-summary',
  //       component: () => import('pages/distributor/SummaryPage.vue')
  //     },
  //     {
  //       path: '/distributor-mylicenses',
  //       component: () => import('pages/distributor/MyLicensesPage.vue')
  //     },
  //     {
  //       path: '/distributor-myresellers',
  //       component: () => import('pages/distributor/MyResellersPage.vue')
  //     },
  //     //Reseller
  //     {
  //       path: '/reseller-summary',
  //       component: () => import('pages/reseller/SummaryPage.vue')
  //     },
  //     {
  //       path: '/reseller-mylicenses',
  //       component: () => import('pages/reseller/MyLicensesPage.vue')
  //     },
  //     {
  //       path: '/reseller-mylicenses/unsold',
  //       component: () => import('pages/reseller/MyLicensesPage.vue')
  //     }
  //   ],
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  // {
  // 	path: '/',
  // 	component: () => import('@pages/MainPage.vue'),
  // },
  // {
  // 	path: '/radius-otp',
  // 	component: () => import('pages/RadiusOTPPage.vue'),
  // },
  // {
  // 	path: '/recover-password',
  // 	component: () => import('pages/RecoverPasswordPage.vue'),
  // },
  // {
  // 	path: '/offlineActivation',
  // 	component: () => import('pages/OfflineActivationPage.vue'),
  // },
  // {
  // 	path: '/reset-password',
  // 	component: () => import('pages/ResetPasswordPage.vue'),
  // },
  // {
  // 	path: '/account-activation',
  // 	component: () => import('pages/verification/VerifyAccountActivation.vue'),
  // },
  // {
  // 	path: '/delete-account-now',
  // 	component: () => import('pages/verification/VerifyAccountDeletionNow.vue'),
  // },
  // {
  // 	path: '/change-email',
  // 	component: () => import('pages/verification/VerifyChangeEmail.vue'),
  // },
  // {
  // 	path: '/reverse-account-deletion',
  // 	component: () => import('pages/verification/VerifyRestoreAccount.vue'),
  // },
  // {
  // 	path: '/user-invitation',
  // 	component: () => import('pages/verification/VerifyUserInvitation.vue'),
  // },
  // {
  // 	path: '/setup',
  // 	component: () => import('pages/SetupWizard.vue'),
  // },
  // {
  // 	path: '/retrieve-key',
  // 	component: () => import('pages/RetrieveKey.vue'),
  // },
  // //APP
  // {
  // 	path: '/appLogin',
  // 	component: () => import('src/pages/app/AppLoginPage.vue'),
  // },
  // {
  // 	path: '/home',
  // 	component: () => import('src/pages/app/HomePage.vue'),
  // 	meta: {
  // 		requiresAuth: true,
  // 	},
  // },
  // {
  // 	path: '/pricing',
  // 	component: () => import('src/pages/app/PricingPage.vue'),
  // 	meta: {
  // 		requiresAuth: true,
  // 	},
  // },
  // {
  // 	path: '/trial',
  // 	component: () => import('src/pages/app/TrialPlanPage.vue'),
  // },
  // {
  // 	path: '/page-not-found',
  // 	component: () => import('src/pages/PageNotFound.vue'),
  // },

  // Always leave this as last one,
  // but you can also remove it
  // {
  // 	path: '/:catchAll(.*)*',
  // 	component: () => import('src/pages/PageNotFound.vue'),
  // },
];

export default routes;
