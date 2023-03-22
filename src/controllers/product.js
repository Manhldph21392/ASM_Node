import Joi from "joi";
import Product from "../models/product";

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  desc: Joi.string().required(),
  status: Joi.boolean().required(),
  quality: Joi.number().required(),
});

export const create = async (req, res) => {
  try {
    const body = req.body;
    const { error } = productSchema.validate(body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const product = await Product.create(body);
    if (product.length === 0) {
      return res.status(400).json({
        message: "Them sp that bai",
      });
    }
    return res.status(200).json({
      message: "Them sp thanh cong",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const product = await Product.find();
    if (product.length === 0) {
      return res.status(400).json({
        message: "Khong co sp nao",
      });
    }
    return res.status(200).json(product);
  } catch (error) {}
};

export const get = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product.length === 0) {
      return res.status(400).json({
        message: "Khong co sp ",
      });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (product.length === 0) {
      return res.status(400).json({
        message: "Xoa sp that bai",
      });
    }
    return res.status(200).json({
      message: "Xoa sp thanh cong",
      product,
    });
  } catch (error) {}
};

export const update = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product.length === 0) {
      return res.status(400).json({
        message: "Cap nhat sp that bai",
      });
    }
    return res.status(200).json({
      message: "Cap nhat sp thanh cong",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
