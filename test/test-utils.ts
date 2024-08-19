export const mockResponseModel = function (data: any) {
  this.data = data;
  this.save = vi.fn(async () => {
    return this.data;
  });
};
