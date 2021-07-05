export const getFormatedTime = (time) => {
  const today = new Date(time);
  const dd = String(today.getDate()).padStart(2, '0');
  const MM = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const hh = String(today.getHours()).padStart(2, '0');
  const mm = String(today.getMinutes()).padStart(2, '0');

  return dd + '/' + MM + '/' + yyyy + ' ' + hh + ':' + mm;
};

export const getTimeDifference = (startTime, endTime) => {
  const startTimeDate = new Date(startTime);
  const endTimeDate = new Date(endTime);

  const diffTime = Math.abs(Number(endTimeDate) - Number(startTimeDate));
  return getFormat(diffTime);
};

const getFormat = (msDuration) => {
  const hh = Math.floor(msDuration / 1000 / 60 / 60);
  const mm = Math.floor((msDuration / 1000 / 60 / 60 - hh) * 60);

  const minutes = `${mm}`.padStart(2, '0');
  const hours = `${hh}`.padStart(2, '0');

  return `${hours}h ${minutes}m`;
};

export const getAllTimeDifference = (appointments, userId, isAdmin) => {
  let difference = 0;
  appointments.map((appointment) => {
    if (
      (appointment.user.id === userId || isAdmin) &&
      appointment.startDate !== null &&
      appointment.finishDate !== null
    ) {
      difference += Math.abs(
        Number(new Date(appointment.finishDate)) -
          Number(new Date(appointment.startDate))
      );
    }
    return null;
  });
  return getFormat(difference);
};

export const getMementString = (addition) => {
  return getStringDateTime(
    new Date(Number(new Date()) + addition * 1000 * 60 * 60)
  );
};

export const getFormatedDb = (data) => {
  return getStringDateTime(
    new Date(Number(new Date(data)) + 3 * 1000 * 60 * 60)
  );
};

const getStringDateTime = (data) => {
  const today = data;
  const dd = String(today.getDate()).padStart(2, '0');
  const MM = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const hh = String(today.getHours()).padStart(2, '0');
  const mm = String(today.getMinutes()).padStart(2, '0');

  return yyyy + '-' + MM + '-' + dd + 'T' + hh + ':' + mm;
};
