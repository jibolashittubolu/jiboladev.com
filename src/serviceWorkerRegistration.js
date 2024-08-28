// serviceWorkerRegistration.js

// export function register() {
//   if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker
//         .register('/service-worker.js')
//         .then(registration => {
//           console.log('Service Worker registered with scope:', registration.scope);
//         })
//         .catch(error => {
//           console.error('Service Worker registration failed:', error);
//         });
//     });
//   }
// }

// export function unregister() {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.ready.then(registration => {
//       registration.unregister();
//     });
//   }
// }


// // serviceWorkerRegistration.js

export const serviceWorkerRegistration = {
    register: () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
            console.error('Error registering Service Worker:', error);
          });
      }
    },
    unregister: () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister();
        });
      }
    },
  };
  