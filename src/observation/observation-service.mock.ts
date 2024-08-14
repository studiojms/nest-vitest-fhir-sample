export class ObservationServiceMock {
  create = vi.fn();
  findAll = vi.fn();
  findOne = vi.fn();
  remove = vi.fn();

  clearMocks() {
    this.create.mockReset();
    this.findAll.mockReset();
    this.findOne.mockReset();
    this.remove.mockReset();
  }
}
