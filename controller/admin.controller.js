async function signin (req, res) {
  //putting it in a try and catch block
  try {
    const { email, password, firstname, lastname } = req.body; // should add a ZOD validation

    //hash the password before storing it in a db

    const hashedPass = await bcrypt.hash(password, 10);

    const admin = await adminModel.create({
      email,
      password: hashedPass,
      firstname,
      lastname,
    });

    res.json({
      message: "signedup successfully",
    });
  } catch (err) {
    res.json({
      message: "nhi hua bhai error h kuch",
      err,
    });
  }
};

async function signup (req, res) {
  const { email, password } = req.body;
  const admin = await adminModel.findOne({
    email,
  });
  if (!admin) {
    return res.status(403).json({
      message: "admin not found",
    });
    // const token = jwt.sign({
    //   id:user._id},
    //   JWT_USER_PASSWORD
    // )
    // res.json({
    //   token
    // })
  }
  const passMatch = await bcrypt.compare(password, admin.password);
  if (passMatch) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD,
    );
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      mesage: "incorrect credentials",
    });
  }
};



 async function course(req, res) {
 const {title ,description ,price ,imageurl } = req.body;
 const adminId = req.admin.id;
  const course = await courseModel.create({
    title,description,price, imageurl,creatorID :adminId
  })
  res.json({
    message:"course created",
    courseId : adminId
  });
};


async function updateCourse(req, res) {
  const adminId = req.admin.id;
  const { title, description, imageUrl, price, courseId } = req.body;
  const course = await courseModel.updateOne(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title,
      description,
      imageUrl,
      price,
    },
  );
  res.json({
    message: "course updated",
    courseId: course._id,
  });
};



async function getCourses (req, res) {
  const adminId = req.adminId;
  const course = await courseModel.findOne({
    creatorId: adminId,
  });
  res.json({
    course,
  });
};
module.exports= {signin,signup,course,updateCourse,getCourses}
