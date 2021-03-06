/*
function getTempCallback (location, callback) {
  callback(undefined,78);
  callback('City not found');
}
// Return both eror and success
getTempCallback('Philadelphia', function (err, temp) {
  if (err) {
    console.log('error', err)
  } else {
    console.log('success', temp)
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

// Error and success get called only once
// They don't get called back right away, only when either resolve or reject gets called
getTempPromise('Philadelphia').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});
*/

// Challenge Area
function addPromise (a, b) {
  return new Promise (function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number' ) {
      resolve(a + b);
    } else {
      reject('One or more arguments is not a number');
    }
  });
}

addPromise (1,5).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err)
});

addPromise ('hello',5).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err)
});
